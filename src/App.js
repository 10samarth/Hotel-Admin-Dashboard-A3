import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import AddCustomerPage from './pages/Customers/AddCustomerPage';
import Customers from './pages/Customers/Customers';
import UpdateCustomerPage from './pages/Customers/UpdateCustomerPage';
import CustomersByHotel from './pages/CustomersByHotel';
import AddHotelPage from './pages/Hotels/AddHotelPage';
import Hotels from './pages/Hotels/Hotels';
import UpdateHotelPage from './pages/Hotels/UpdateHotelPage';
import AddBookingPage from './pages/Reservations/AddBookingPage';
import Bookings from './pages/Reservations/Bookings';
import UpdateBookingPage from './pages/Reservations/UpdateBookingPage';
import AddRoomPage from './pages/Rooms/AddRoomPage';
import Rooms from './pages/Rooms/Rooms';
import UpdateRoomPage from './pages/Rooms/UpdateRoomPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

export default function App () {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/*" element={<Dashboard />}>
              <Route path="*" element={<Hotels />} />

              {/* hotels */}
              <Route path="hotels" element={<Hotels />} />
              <Route path="hotels/addHotels" element={<AddHotelPage />} />
              <Route path="hotels/updateHotels" element={<UpdateHotelPage />} />
              <Route
                path="hotels/updateHotels/:id"
                element={<UpdateHotelPage />}
              />

              {/* Customers  */}
              <Route path="customers" element={<Customers />} />
              <Route
                path="customers/addCustomer"
                element={<AddCustomerPage />}
              />
              <Route
                path="customers/updateCustomer"
                element={<UpdateCustomerPage />}
              />
              <Route
                path="customers/updateCustomer/:id"
                element={<UpdateCustomerPage />}
              />

              {/* Rooms  */}
              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/addRoom" element={<AddRoomPage />} />
              <Route path="rooms/updateRoom" element={<UpdateRoomPage />} />
              <Route path="rooms/updateRoom/:id" element={<UpdateRoomPage />} />

              {/* Bookings  */}
              <Route path="reservations" element={<Bookings />} />
              <Route
                path="reservations/addReservation"
                element={<AddBookingPage />}
              />
              <Route
                path="reservations/updateReservation"
                element={<UpdateBookingPage />}
              />
              <Route
                path="reservations/updateReservation/:id"
                element={<UpdateBookingPage />}
              />

              {/* customer per hotel  */}
              <Route path="customersPerHotel" element={<CustomersByHotel />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    );
}
