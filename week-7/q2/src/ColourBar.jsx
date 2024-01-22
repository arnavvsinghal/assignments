function ColourButton({ colour ,setBgColor}) {
  return (
    <button
      style={{
        background: colour,
        border: "None",
        padding: "8px",
        borderRadius: "8px",
        margin: "4px",
        marginBlock:"8px"
      }}
    onClick={()=>{
      setBgColor(colour);
    }}>
      {colour}
    </button>
  );
}
export default function ColourBar({setState}) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "12px",
        margin:'10px'
      }}
    >
      <ColourButton colour={"Red"} setBgColor = {setState}/>
      <ColourButton colour={"Yellow"} setBgColor = {setState}/>
      <ColourButton colour={"Violet"} setBgColor = {setState}/>
      <ColourButton colour={"Green"} setBgColor = {setState}/>
      <ColourButton colour={"Blue"} setBgColor = {setState}/>
      <ColourButton colour={"Orange"} setBgColor = {setState}/>
      <ColourButton colour={"Brown"} setBgColor = {setState}/>
      <ColourButton colour={"Purple"} setBgColor = {setState}/>
      <ColourButton colour={"White"} setBgColor = {setState}/>
    </div>
  );
}
