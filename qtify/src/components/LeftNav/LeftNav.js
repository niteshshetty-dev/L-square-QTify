import Button from "../Button/Button";
import leftArrow from "../../assets/LeftArrow.svg";

export default function LeftNav({ onClick }) {
  return (
    <Button
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        position: "absolute",
        left: 0,
        top: "40%",
        zIndex: 10,
      }}
    >
      <img src={leftArrow} alt="leftArrow" width={24} />
    </Button>
  );
}
