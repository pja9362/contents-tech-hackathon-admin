import dummy1 from "../images/plantdummy1.jpeg";
import dummy2 from "../images/plantdummy2.jpeg";
import dummy3 from "../images/plantdummy3.jpeg";
import dummy4 from "../images/plantdummy4.png";
import dummy5 from "../images/plantdummy5.png";

const getPlantDummyImage = (index) => {
  switch (index) {
    case 0:
      return dummy1;
    case 1:
      return dummy2;
    case 2:
      return dummy3;
    case 3:
      return dummy4;
    case 4:
      return dummy5;
    default:
      return dummy1;
  }
};

export default getPlantDummyImage;
