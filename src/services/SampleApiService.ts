import http from "../http-common";
import SuccessResponse from "../types/SuccessResponse";


class SampleApiService {

  getCreditHistory(): Promise<any> {
    return http.get(`http://127.0.0.1:8000/v1/tap_data_history/credit_card`);
  }


  getVersion(limit: number): Promise<any> {
    return http.get(`v1/setting`);
  }

}

export default new SampleApiService();