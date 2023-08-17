import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import { Header } from "./layout/Header/Header";
import UserLogin from "./pages/UserLogin/UserLogin";
import OrderBook from "./pages/OrderBook/OrderBook";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import NewOrder from "./pages/NewOrder";
// import Footer from "./layout/Footer";

function App() {
  const [userid, setuserid] = useState("");
  const [authentication, changeauthentication] = useState(false);
  const [conn, setconn] = useState(0);
  const [trades, setTrades] = useState([]);
  const [orderBookData, setorderBookData] = useState([]);
  const [userOrder, setUserOrder, getUserOrder] = useState([]);
  const [executions, setExecutions] = useState([]);
  // const [objson, setObjson] = useState({});
  const [newExecution, setnewExecution] = useState([]);

  console.log("before");
  function connect() {
    let stompClient = new Client();

    stompClient.configure({
      brokerURL: "ws://localhost:8081/ws",
      onConnect: () => {
        console.log("Connected ");
        stompClient.subscribe("/order/" + userid, (order) => {
          // console.log("1");
          const o = JSON.parse(order.body);

         // o.executed = 0;
          console.log("executed", o.executed)
          o["isCancelled"] = false;
          o.remainingOrder = o.volume;
          console.log("Remaning Order ", o.remainingOrder);
          console.log("Recieved Order = ", o);

          setUserOrder((userOrder) => [...userOrder, o]);
          setUserOrder((userOrder) => {
            console.log("User Order here", userOrder);
            return userOrder;
          });
        });
        stompClient.subscribe("/trade", (order) => {
          const t = JSON.parse(order.body);
          console.log("Received Trade: ", t);
          setTrades([...trades, t]);
        });

        stompClient.subscribe("/orderbook", (ob) => {
          const obJson = JSON.parse(ob.body);
          console.log("orderbook = ", obJson);
          setorderBookData([...obJson.buyOrders, ...obJson.sellOrders]);
          console.log("orderBookData=", orderBookData);
        });

        stompClient.subscribe("/execution/" + userid, (ob) => {
          const obJson = JSON.parse(ob.body);
          console.log("RECEIVEDExecution JSON = ", obJson);
          console.log("UserOrder in subscribe execution ", userOrder)

          setnewExecution((newExecution) => [...newExecution, obJson]);
          //setObjson(obJson);


        });
        // console.log("After subscriptions stompclient ", stompClient);
      },

      debug: (message) => {
        console.log(message);
      },
    });

    return stompClient;
  }
  console.log("userOrder outside", userOrder);
  console.log("newExecution outside", newExecution);
  while (newExecution.length > 0) {
    let a = newExecution;
    updateUserorder(a[0]);
    a.shift();
    setnewExecution(a);
  }

  // useEffect(() => {
  //   console.log('inside the useeffect');
  //   // console.log('objson inside useeffect', objson)
  //   // console.log('userorder inside useeffect', userOrder)

  //   console.log('inside useeffect of objson', objson);
  //     updateUserorder(objson);
  //     console.log('After update userOrder inside useeffect ', userOrder);

  // }, [objson])

  async function fetchExecutionsOfUser() {
    const api = `http://localhost:8081/get-orders?userId=${userid}`;

    const result = await fetch(api);
    const getresult = await result.json();
    console.log("Prev Execution of user: ", getresult);
    setExecutions(getresult);
  }

  function updateUserorder(obJson) {
    console.log("userorder in updateuserorder ", userOrder);
    let a = userOrder.slice();

    for (let i = 0; i < a.length; i++) {
      console.log("a[i].id", a[i].id);
      console.log("obJson.id", obJson.orderId);
      if (a[i].id === obJson.orderId) {
        a[i].remainingOrder = a[i].remainingOrder - obJson.executedVolume;
        a[i].executed += obJson.executedVolume;

        setUserOrder(a);
        console.log("Userorder after updated ", userOrder);
        console.log("Remaining order of userOrder[i] ", a[i].remainingOrder);

        break; // stop searching
      }
    }
    return;
  }

  useEffect(() => {
    console.log("User order->", userOrder);
  }, [userOrder]);

  if (authentication === true && conn === 0) {
    let stompClient = connect();
    stompClient.activate();

    setconn(1);
    fetchExecutionsOfUser();
  }

  return (
    <div className="h-screen bg-[#f1f1f1]  min-h-fit ">
      <Router>
        <Header
          userid={userid}
          changeid={setuserid}
          authentication={authentication}
          changeauthentication={changeauthentication}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <UserLogin
                userid={userid}
                setuserid={setuserid}
                changeauthentication={changeauthentication}
              />
            }
          />
          <Route
            path="/order_book"
            element={<OrderBook id={userid} userdata={orderBookData} />}
          />
          <Route
            path="/order_history"
            element={
              <OrderHistory
                setUserOrder={setUserOrder}
                id={userid}
                userdata={userOrder}
                executions={executions}
              />
            }
          />
          <Route path="/place_order" element={<NewOrder id={userid} />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
