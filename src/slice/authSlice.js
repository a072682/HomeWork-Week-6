// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
const initialUsers = storedUsers || [
  {
    id: 'admin123',
    account: 'admin123',
    email: 'admin123@gmail.com',
    password: 'admin123',
    name: '管理員',
    subscriptionType: [],
  },
];

const authSlice = createSlice({
  name: 'auth', //名稱
  initialState: { //初始數值
    users: initialUsers,
    currentUserData: null,
    isLoggedIn: localStorage.getItem('fakeLogin') === 'true',
    account: localStorage.getItem('fakeAccount') || '',
  },
  reducers: {
    
    //驗證帳號密碼登入
    matchUser: (state, action) => {
        const { account, password } = action.payload;
        //解構結果 
        //email = 'andy@gmail.com'
        //password = 'andy123'

        //取得所有註冊者的資料
        const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
        //註冊者資料引入state.users
        state.users = storedUsers || initialUsers;
        //從註冊者中要找到對應帳號密碼的資料(物件)賦予給found
        const found = state.users.find(
            (item) => item.account === account && item.password === password
        );
        //如果找不到則跳出程序
        if(!found){
          console.log("找不到對應會員");
          return;
        }

        //如果找到會員資料則放入state.currentUserData並利用localStorage存起數值
        if (found) {
            state.currentUserData = found; 
            localStorage.setItem('currentUserData', JSON.stringify(found));
            //物件不能直接寫進 localStorage（只能存字串）
            //JSON.stringify 轉為純字串
            //由字串轉物件方法
            //const stored = localStorage.getItem('currentUserData');
            //const user = JSON.parse(stored);
            //把一段「符合 JSON 格式的字串」轉回 JavaScript 的物件或陣列。
            state.isLoggedIn = true;
            state.account = action.payload.account;
            localStorage.setItem('fakeLogin', 'true');
            localStorage.setItem('fakeAccount', account);
        } else {
            alert('帳號或密碼錯誤');
        }
    },

    //登出
    logout: (state) => {
      state.isLoggedIn = false;
      state.account = '';
      localStorage.removeItem('fakeLogin');
      localStorage.removeItem('fakeAccount');

      //從 localStorage 取出目前登入者資料
      const savedUserData = JSON.parse(localStorage.getItem('currentUserData'));
      //從currentUserData取得帳號
      const account = savedUserData.account;
      //把它寫回 redux 的 state 中
      state.currentUserData = savedUserData;

      //從localStorage 取出所有註冊者資料
      const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
      state.users = storedUsers || initialUsers;

      // 更新 redux state 中的 users
      state.users = state.users.map(user => 
        user.account === account ? state.currentUserData : user
      );

      // 儲存 users至localStorage 中
      localStorage.setItem('fakeUsers', JSON.stringify(state.users));

      //清除localStorage的currentUserData資料
      localStorage.removeItem('currentUserData');

      //最後清除currentUserData資料
      state.currentUserData = null;
    },
    //註冊新會員
    registerUser: (state, action) => {
        const { account, password, email } = action.payload;

        //從localStorage 取出所有註冊者資料
        const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
        state.users = storedUsers || initialUsers;

        //確認帳號是否有重複註冊
        const exist = state.users.some((user) => user.account === account);
        //如果有則跳出程序
        if (exist) {
          alert('此帳號已被註冊');
          return;
        }

        //建立新會員資料
        const newUser = {
          id: account,
          account,
          email,
          password,
          name: '會員',
          subscriptionType: [],
        };
        
        //推入state.users陣列中
        state.users.push(newUser);

        //存進 localStorage
        localStorage.setItem('fakeUsers', JSON.stringify(state.users));

        // ✅ 登入同步
        state.currentUserData = newUser;
        state.isLoggedIn = true;
        state.account = account;
        localStorage.setItem('fakeLogin', 'true');
        localStorage.setItem('fakeAccount', account);
        localStorage.setItem('currentUserData', JSON.stringify(newUser));
    },

    //資料刷新用
    loadUserData: (state, action) => {
      // const { account } = action.payload;

      //從 localStorage 取出目前登入者資料
      const savedUserData = JSON.parse(localStorage.getItem('currentUserData'));
      // console.log("從currentUserData轉換的資料:",savedUserData);

      //從currentUserData取得帳號
      const account = savedUserData.account;

      //從localStorage 取出所有註冊者資料
      const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
      state.users = storedUsers || initialUsers;
      
      //確認使用者
      const user = state.users.find((u) => u.account === account);

      if (user) {
        // console.log("找到user");
        //把它寫回 redux 的 state 中
        state.currentUserData = savedUserData;
      } else {
        console.log("沒找到user");
        return;
      }
    },

    SubscriptionTypeDataUp01:(state,action) =>{
        const {payTypeData} = action.payload;

        //從 localStorage 取出目前登入者資料
        const current = JSON.parse(localStorage.getItem('currentUserData'));
        if (!current) return;

        //從currentUserData取得帳號
        const account = current.account;

        //把它寫回 redux 的 state 中
        state.currentUserData = current;

        //從localStorage 取出所有註冊者資料
        const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
        state.users = storedUsers || initialUsers;

        //確認使用者
        const user = state.users.find((item) => item.account === account);
        if (!user) return;

        // 檢查是否存在
        if (!state.currentUserData.subscriptionType) {
          state.currentUserData.subscriptionType = [];
        }

        //將訂閱資料儲存為指定格式
        state.currentUserData.subscriptionType = [
          { 
            payTypeData:{
              ...payTypeData,
            },
            certification:true,
          }
        ];
        
        //更新currentUserData
        localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));

        // 更新 redux state 中的 users
        state.users = state.users.map(user => 
          user.account === account ? state.currentUserData : user
        );

        // 更新 localStorage 中的所有 users
        localStorage.setItem('fakeUsers', JSON.stringify(state.users));
    },

    //訂閱類型上傳(最終)
    SubscriptionTypeDataUp02:(state,action) =>{
        const {userData,cardData,rememberUserData,rememberCardData} = action.payload;

        if(!userData){
          console.log("userData資料缺失");
          return;
        }else if(!cardData){
          console.log("cardData資料缺失");
          return;
        }

        // 1️⃣ 從 localStorage 取出目前登入者資料
        const current = JSON.parse(localStorage.getItem('currentUserData'));
        if (!current) return;

        // 2️⃣ 把它寫回 redux 的 state 中
        state.currentUserData = current;

        //從localStorage 取出所有註冊者資料
        const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
        state.users = storedUsers || initialUsers;

        //確認使用者
        const user = state.users.find((item) => (item.account === userData.account)&&(item.password === userData.password));
        
        if (!user) {
          console.log("找不到使用者");
          return;
        }else if(user){
          console.log("找到使用者");
        }

        //資料寫入
        state.currentUserData.subscriptionType = [
          {   
              ...state.currentUserData.subscriptionType[0] || {},
              userData:userData,
              cardData:cardData,
              rememberUserData,
              rememberCardData,
              Trigger:true,
          }];
        
        state.currentUserData = {
          ...state.currentUserData,
          Trigger:true,
        }

        
        // 先儲存currentUserData
        localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));

        // 更新 redux state 中的 users
        state.users = state.users.map(user => 
          user.account === userData.account ? state.currentUserData : user
        );
        // 更新 localStorage 中的所有 users
        localStorage.setItem('fakeUsers', JSON.stringify(state.users));
    },

    //判定用
    Trigger:(state,action) =>{

      // 1️⃣ 從 localStorage 取出目前登入者資料
      const current = JSON.parse(localStorage.getItem('currentUserData'));
      if (!current) return;

      //從currentUserData取得帳號
      const account = current.account;

      // 2️⃣ 把它寫回 redux 的 state 中
      state.currentUserData = current;

      //從localStorage 取出所有註冊者資料
      const storedUsers = JSON.parse(localStorage.getItem('fakeUsers'));
      state.users = storedUsers || initialUsers;

      //確認使用者
      const user = state.users.find((item) => item.account === account);
      
      if (!user) {
        console.log("找不到使用者");
        return;
      }else if(user){
        console.log("找到使用者");
      }

      //資料寫入
      state.currentUserData = 
        {   
            ...state.currentUserData,
            Trigger:false,
        };

      // 先儲存currentUserData
      localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));

      // 更新 redux state 中的 users
      state.users = state.users.map(user => 
        user.account === account ? state.currentUserData : user
      );
      // 更新 localStorage 中的所有 users
      localStorage.setItem('fakeUsers', JSON.stringify(state.users));
    },
  },
});

export const { login, logout, matchUser, registerUser, loadUserData, SubscriptionTypeDataUp01, SubscriptionTypeDataUp02, Trigger } = authSlice.actions; //是為了在外部可以使用函式
export default authSlice.reducer;