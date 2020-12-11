import React, { Component } from "react";
import Detail from "../components/Place/Detail";

export default class DetailPage extends Component {
  state = {
    place: {
      name: "Pontsteiger",
      address: "Pontsteiger 1-389, 1014 ZP Amsterdam, Netherlands",
      phone: "+31 6 83243912",
      website: "https://www.hureninpontsteiger.nl/",
      infos: {
        wheelchair_accessible: true,
        wheelchair_bathroom: false,
        braille_menu: false,
        braille_signs: false,
        large_menu: false,
        wheelchair_table: false,
        lights: false,
        comfortable_colors: false,
        noises: false,
        working_lift: false,
        decibels: "",
        sign_language: false,
        open_area: false,
        changing_ladies: false,
        changing_mens: false,
        high_chair: false,
        kids_menu: false,
        play_area: false,
        phone_charger: false,
        parking: false,
        strollers: false,
        breastfeeding: false,
        _id: "5fd0bd451839f535c9a14811",
        place_id: "ChIJ9-1rhi0IxkcRfYG8lHchNI0",
        __v: 0,
      },
      comments: [
        {
          when: "2020-12-10T09:02:40.895Z",
          _id: "5fd1e4320acb1f6d031a1ce2",
          body: "qualqurr coisa",
          place_id: "ChIJ9-1rhi0IxkcRfYG8lHchNI0",
          author: null,
          __v: 0,
        },
        {
          when: "2020-12-10T09:04:38.475Z",
          _id: "5fd1e54ba8ba1b6d52080baa",
          body: "qualqurr coisa",
          place_id: "ChIJ9-1rhi0IxkcRfYG8lHchNI0",
          author: "5fd1e538a8ba1b6d52080ba7",
          __v: 0,
        },
        {
          when: "2020-12-10T20:14:13.715Z",
          _id: "5fd2824faa00e21c700a5afe",
          body: "qualquer",
          place_id: "ChIJ9-1rhi0IxkcRfYG8lHchNI0",
          author: "5fd1e538a8ba1b6d52080ba7",
          picture:
            "https://res.cloudinary.com/de4iimwey/image/upload/v1607631439/qbhctjylvh2ngq7bkvyv.jpg",
          __v: 0,
        },
        {
          when: "2020-12-10T20:14:13.715Z",
          _id: "5fd28261aa00e21c700a5aff",
          body: "qualquer",
          place_id: "ChIJ9-1rhi0IxkcRfYG8lHchNI0",
          author: "5fd1e538a8ba1b6d52080ba7",
          picture:
            "https://res.cloudinary.com/de4iimwey/image/upload/v1607631456/pjz25odgv1arryhftqag.jpg",
          __v: 0,
        },
      ],
    },
  };
  render() {
    return (
      <div>
        <Detail place={this.state.place} />
      </div>
    );
  }
}
