import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Homepage from './homepage/homepage'
import UserRegister from '../routes/userRegister/userRegister'
import UserLogin from '../routes/userLogin/userLogin'
import PasswordReset from '../routes/passwordReset/passwordReset'
import AdminLogin from '../routes/adminLogin/adminLogin'
import AdminDashboard from '../routes/adminDashboard/adminDashboard'
import UserDashboard from '../routes/userDashboard/userDashboard'
import Account from '../routes/userDashboard/account/account'
import Dashboard from '../routes/userDashboard/dashboard/dashboard'
import Support from "../routes/userDashboard/support/support"
import TransactionHistory from "../routes/userDashboard/transactionHistory/transactionHistory"
import DepositWithdrawal from "../routes/userDashboard/depositWithdrawal/depositWithdrawal"
import SubscriptionTrade from "../routes/userDashboard/subscriptionTrade/subscriptionTrade"
import Packages from "../routes/userDashboard/packages/packages"
import Referral from "../routes/userDashboard/referral/referral"
import AdminSubscription from '../routes/adminDashboard/adminSubscription/adminSubscription'
import AdminRegistration from '../routes/adminDashboard/adminRegistration/adminRegistration'
import AdminTransaction from '../routes/adminDashboard/adminTransaction/adminTransaction'
const App = () => {

  const router = createBrowserRouter([
      {
        path : "/",
        element : <Layout/>,
        children : [
          {
            index : true,
            element : <Homepage/>
          },
        ]
      },
     {
        path:"/userRegister",
        element:<UserRegister/>
      },
      {
        path:"/userLogin",
        element:<UserLogin/>
      },
      {
        path : "/passwordReset",
        element : <PasswordReset/>
      },
      {
        path : "/adminLogin",
        element : <AdminLogin/>
      },
      {
        path : "/adminDashboard",
        element : <AdminDashboard/>,
        children : [
          {
            path : "registration",
            element : <AdminRegistration/>

            },
            {
              path : "subscription",
              element : <AdminSubscription/>
            },
            {
              path : "transaction",
              element : <AdminTransaction/>
            }
        ]
      },
      {
        path : "/userDashboard",
        element : <UserDashboard/>,
        children : [
           {
            index:true,
            element:<Dashboard/>
          },
      
           {
            path : "dashboard",
            element : <Dashboard/>
          },
            {
            path : "account",
            element : <Account/>
          },
          {
            path : "support",
            element : <Support/>
          }, 
          {
            path : "transactionHistory",
            element : <TransactionHistory/>
          },  
          {
            path : "depositWithdrawal",
            element : <DepositWithdrawal/>
          },
          {
            path:"subscriptionTrade",
            element: <SubscriptionTrade/>
          },
          {
            path : "packages",
            element : <Packages/>
          },
          {
            path : "referral",
            element : <Referral/>
          }
      
        ]

      }
    
  
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
