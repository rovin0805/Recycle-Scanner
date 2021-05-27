import React from "react";
import Glass from "../../components/section/Glass";
import Metal from "../../components/section/Metal";
import Paper from "../../components/section/Paper";
import Plastic from "../../components/section/Plastic";
import Vinyl from "../../components/section/Vinyl";
import Food from "../../components/section/Food";
import Mask from "../../components/section/Mask";
import Etc from "../../components/section/Etc";

export default ({ title }) => {
  return (
    (title.includes("종이") && <Paper />) ||
    (title.includes("금속") && <Metal />) ||
    (title.includes("유리") && <Glass />) ||
    (title.includes("플라스틱") && <Plastic />) ||
    (title.includes("합성수지류") && <Vinyl />) ||
    (title.includes("음식물") && <Food />) ||
    (title.includes("마스크") && <Mask />) ||
    (title.includes("기타") && <Etc />)
  );
};
