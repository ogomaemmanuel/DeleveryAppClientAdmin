import * as SignalR from "@aspnet/signalr";
import apiUrl from "../config/endPoint";
import store from "../store/index";
const connection = new SignalR.HubConnectionBuilder()
  .withUrl(`${apiUrl.APP_END_POINT.API_HOST}/signalr/notification-hub`, {
    accessTokenFactory: store.getters("auth").accessToken
  })
  .configureLogging(SignalR.LogLevel.Information)
  .build();
export default {
  connection
};
