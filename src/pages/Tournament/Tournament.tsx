import Bracket from "./Bracket";
import Form from "./Form"
import TableTennisBackground from "../../assets/image/tt.png"

const divStyle: React.CSSProperties = {
  backgroundImage: `linear-gradient(to right,  rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.92), rgba(26, 26, 26, 1)), url(${TableTennisBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};


function Tournament() {
  return (
    <div className="w-full h-full flex justify-center align-middle" style={divStyle}>
       {/* <Bracket /> */}
      <Form />
    </div>
  );
}

export default Tournament;
