{
  /**
   * Union types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const title: TileSize = 16;
  //const title: TileSize = 100; //error - 100은 타입에 정의되어있지 않음

  //function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> "성공" body
  // fail -> "실패" reason
  // console.log로 출력

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      // in 으로 하는것도 가능하지만 좋지 못한 방법
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
