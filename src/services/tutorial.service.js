import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/movie");
  }

  get(id) {
    return http.get(`/movie/${id}`);
  }
  signIn(data, id) {
    const data1 = JSON.stringify(data);
    console.log(data1);
    return http.post(`/user/login/${id}`, data1);
  }
  signUp(data) {
    const data1 = JSON.stringify(data);
    return http.post("/user", data1);
  }
  Booking(data) {
    console.log(data);
    return http.post("/booking/", data);
  }
  getBooking(id) {
    console.log(id);
    return http.get(`/booking/all/${id}`);
  }
  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
