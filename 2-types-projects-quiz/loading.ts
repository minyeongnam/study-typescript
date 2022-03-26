{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (state: ResourceLoadState): void => {
    switch (state.state) {
      case "loading":
        return console.log("👀 loading...");
      case "success":
        return console.log(`😃 ${state.response.body}`);
      case "fail":
        return console.log(`😱 ${state.reason}`);
      default:
        throw new Error(`unknown state: ${state}`);
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
