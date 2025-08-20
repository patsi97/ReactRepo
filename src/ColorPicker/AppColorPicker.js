import ColorPicker from "./ColorPicker.js";

export default function AppColorPicker({color, setColor}) {
  return (
      <div>
        <ColorPicker color={color} setColor={setColor}/>
      </div>
  );
}