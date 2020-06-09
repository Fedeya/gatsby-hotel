import React from "react";
import styled from 'styled-components';

import Layout from "../components/layout";
import HotelImage from '../components/hotelImage';
import HomeContent from '../components/homeContent';
import RoomPreview from '../components/roomPreview'

import useRooms from '../hooks/use-rooms';

const RoomsTitle = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-size: 3rem;
`;

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const rooms = useRooms();

  return (
    <Layout>
      <HotelImage />
      <HomeContent />
      <RoomsTitle>Our Rooms</RoomsTitle>
      <RoomList>
        {
          rooms.map(room => (
            <RoomPreview key={room.id} room={room} />
          ))
        }
      </RoomList>

    </Layout>
  );
}

export default IndexPage;
