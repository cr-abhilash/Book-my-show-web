import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/movie");
  }

  get(id) {
    return http.get(`/movie/${id}`);
  }
  signIn(data) {
    console.log(data);
    //return http.post("", data);
  }
  signUp(data) {
    console.log(data);
    //return http.post("", data);
  }
  Booking(data) {
    console.log(data);
    return http.post("/booking/", data);
  }
  getBooking(id) {
    console.log(id);
    //return http.get(``);
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
