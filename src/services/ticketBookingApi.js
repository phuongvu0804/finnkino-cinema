import axiosClient from "./config/axiosClient";

const resourceName = "QuanLyDatVe/";

const ticketBookingApi = {
  bookTickets: (ticketList) => {
    const url = resourceName + "DatVe";
    return axiosClient.post(url, ticketList);
  },
  getTicketOfficeList: (params) => {
    const url = resourceName + "LayDanhSachPhongVe";
    return axiosClient.get(url, { params });
  },
  createShowtime: (showtime) => {
    const url = resourceName + "TaoLichChieu";
    return axiosClient.post(url, showtime);
  },
};

export default ticketBookingApi;
