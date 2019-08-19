import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import PhoneRegister from '@/components/phoneRegister'
import Verify from '@/components/verify'
import SetPassword from '@/components/setPassword'
import EmailRegister from '@/components/emailRegister'
import Index from '@/components/index'
import Map from '@/components/map'
import Cycling from '@/components/cycling'
import Fault from '@/components/fault'
import Scan from '@/components/scan'
import My from '@/components/my'
import HistoryFault from '@/components/historyFault'
import TheFaultDetails from '@/components/theFaultDetails'
import ReportTheSuccess from '@/components/reportTheSuccess'
import MyInfo from '@/components/myInfo'
import MyJourney from '@/components/myJourney'
import Route from '@/components/route'
import SettingPayPassword from '@/components/settingPayPassword'
import ConfidentialPayment from '@/components/confidentialPayment'
import ReturnTheDepositMoney from '@/components/returnTheDepositMoney'
import ChangeWalletPassword from '@/components/changeWalletPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
		  path: '/changeWalletPassword',
		  name: 'changeWalletPassword',
		  component: ChangeWalletPassword
		},
		{
		  path: '/returnTheDepositMoney',
		  name: 'returnTheDepositMoney',
		  component: ReturnTheDepositMoney
		},
		{
		  path: '/confidentialPayment',
		  name: 'confidentialPayment',
		  component: ConfidentialPayment
		},
    {
      path: '/settingPayPassword',
      name: 'settingPayPassword',
      component: SettingPayPassword
    },
    {
      path: '/route',
      name: 'route',
      component: Route
    },
    {
      path: '/myJourney',
      name: 'myJourney',
      component: MyJourney
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: MyInfo
    },
    {
      path: '/reportTheSuccess',
      name: 'reportTheSuccess',
      component: ReportTheSuccess
    },
    {
      path: '/theFaultDetails',
      name: 'theFaultDetails',
      component: TheFaultDetails
    },
    {
      path: '/historyFault',
      name: 'historyFault',
      component: HistoryFault
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/scan',
      name: 'scan',
      component: Scan
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/phoneRegister',
      name: 'phoneRegister',
      component: PhoneRegister
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/setPassword',
      name: 'setPassword',
      component: SetPassword
    },
    {
      path: '/emailRegister',
      name: 'emailRegister',
      component: EmailRegister
    },
		{
		  path: '/map',
		  name: 'map',
		  component: Map
		},
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/cycling',
      name: 'cycling',
      component: Cycling
    },
    {
      path: '/fault',
      name: 'fault',
      component: Fault
    },
  ]
})
