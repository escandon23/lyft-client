import { createBrowserRouter , RouterProvider } from 'react-router'
import Homepage from './homepage/homepage'
import UserRegister from '../routes/userRegister/userRegister'
import UserLogin from '../routes/userLogin/userLogin'
import PasswordReset from '../routes/passwordReset/passwordReset'
import AdminLogin from '../routes/adminLogin/adminLogin'
import AdminDashboard from '../routes/adminDashboard/adminDashboard'
import UserDashboard from '../routes/userDashboard/userDashboard'
import Dashboard from '../routes/userDashboard/dashboard/dashboard'
import TransactionHistory from "../routes/userDashboard/transactionHistory/transactionHistory"
import DepositWithdrawal from "../routes/userDashboard/depositWithdrawal/depositWithdrawal"
import SubscriptionTrade from "../routes/userDashboard/subscriptionTrade/subscriptionTrade"
import Packages from "../routes/userDashboard/packages/packages"
import Referral from "../routes/userDashboard/referral/referral"
import AdminSubscription from '../routes/adminDashboard/adminSubscription/adminSubscription'
import AdminTransaction from '../routes/adminDashboard/adminTransaction/adminTransaction'
const App = () => {

  const router = createBrowserRouter([
      {
        path : "/",
        element : <Homepage/>,
       
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
