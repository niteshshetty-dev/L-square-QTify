import Button from "../Button/Button";
import rightArrow from "../../assets/RightArrow.svg";

export default function RightNav({ onClick }) {
  return (
    <Button
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        position: "absolute",
        right: 0,
        top: "40%",
        zIndex: 10,
      }}
    >
      <img src={rightArrow} alt="rightArrow" width={24} />
    </Button>
  );
}
