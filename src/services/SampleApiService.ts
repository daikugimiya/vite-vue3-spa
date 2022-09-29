import http from "../http-common";


type Tapdatas = {
  terminalNo: string;
  Zip: string;
  Prefecture: string;
  City: string ;
  Address: string;
  JP_Prefecture: string;
  JP_City: string;
  JP_Address: string;
}

class SampleApiService {

  getTapdata(limit: number) {
    const response = http.get(`v1/tapdatas?limit=${limit}`);
    return response
  }

  getVersion(limit: number): Promise<any> {
    return http.get(`v1/setting`);
  }

}

export default new SampleApiService();