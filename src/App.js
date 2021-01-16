import React, { createContext, useState } from 'react'
// import ClassCounterTitleChange from './03_useEffect/01_class實現title的修改'
// import HookChangeTitle from './03_useEffect/02_hook實現title的修改'
// import EffectHookCancelDemo from './03_useEffect/03_useEffect訂閱和取消訂閱'
// import MultiEffectHookDemo from './03_useEffect/04_多個useEffect一起使用'
// import ContextHookDemo from './04_useContext/useContext的使用'
// import Home from './05_useReducer/home'
// import Profile from './05_useReducer/profile'
// import UseCallbackDemo01 from './06_useCallback/01_useCallback不能進行的性能優化'
// import UseCallbackDemo02 from './06_useCallback/02_useCallback能進行的性能優化'
// import MemoHookDemo1 from './07_useMemo/01_useMemo複雜計算的應用'
// import MemoHookDemo2 from './07_useMemo/02_useMemo傳入子組件應用類型'
// import RefHoookDemo01 from './08_useRef/01_useRef引用DOM'
import RefHookDemo02 from './08_useRef/02_useRef引用其他數據'
import ForwardRefDemo01 from './09_useImprativeHandle/01_回顧forward的用法'
import UseImperativeHandleHookDemo from './09_useImprativeHandle/02_useImprativeHandle的用法'
import EffectCountDemo01 from './10_useLayoutEffect/01_useEffect的使用'
import EffectCountDemo02 from './10_useLayoutEffect/02_useLayoutEffect的使用'
import CustomLifeHookDemo01 from './11_自訂義Hook/01_認識自訂義Hook'
import CustomHookWithContext from './11_自訂義Hook/02_自訂義Hook的練習-context共享'
import CustomHookScrollPostion from './11_自訂義Hook/03_自訂義Hook練習-獲取滾動位置'
import CustomHookLocalData from './11_自訂義Hook/04_自訂義Hook練習-localStorage的存儲'

// import CounterClass from './01_體驗hooks/01_counter-class'
// import CounterHook from './01_體驗hooks/02_counter-hook'
// import CounterHook from './01_體驗hooks/03_counter-hook'
// import CompleteHookState from './02_useState使用/02_複雜狀態的修改'
// import MultiHookState from './02_useState使用/01_多個狀態和複雜狀態'

export const UserContext = createContext()
export const TokenContext = createContext()
export const ThemeContext = createContext()


export default function App(props) {

  const [show, setShow] = useState(true)

  return (
    <div>
      App
      {/* useState的使用 */}
      {/* <CounterHook />
      <CompleteHookState /> */}
      
      {/* useEffect的使用 */}
      {/* <ClassCounterTitleChange /> */}
      {/* <HookChangeTitle /> */}
      {/* { show && <EffectHookCancelDemo />} */}
      {/* { show && <MultiEffectHookDemo />} */}

      {/* useContext
      <UserContext.Provider value={{name: 'coder', age: 18}}>
        <ThemeContext.Provider value={{name: 'Renny', age: 18}}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}
      
      {/* useReducer的使用 */}
      {/* <Home />
      <Profile /> */}

      {/* useCallback的使用 */}
      {/* <UseCallbackDemo01 /> */}
      {/* <UseCallbackDemo02 /> */}

      {/* useMemo的使用 */}
      {/* <MemoHookDemo1 /> */}
      {/* <MemoHookDemo2 /> */}

      {/* useRef的使用 */}
      {/* <RefHoookDemo01 /> */}
      {/* <RefHookDemo02 /> */}

      {/* useImprativeHandle的使用 */}
      {/* <ForwardRefDemo01 /> */}
      {/* <UseImperativeHandleHookDemo /> */}

      {/* useEffectLayout的使用 */}
      {/* <EffectCountDemo01 />
      <EffectCountDemo02 /> */}

      {/* 自訂義hook的使用 */}
      {/* {show && <CustomLifeHookDemo01 />} */}
      {/* <UserContext.Provider value={{name: "Louis", age: 25}}>
        <TokenContext.Provider value={{token: "51531354468"}}>
          <CustomHookWithContext />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomHookScrollPostion /> */}
      <CustomHookLocalData />

      <button onClick={e => setShow(!show)}>show</button>
    </div>
  )
}