{
  // 1-5 printLoginState() 개선
  // 공통적인 프로퍼티를 만들어 구분하기 쉽게 만든다.

  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState2(state: LoginState) {
    if (state.result === "success") {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
