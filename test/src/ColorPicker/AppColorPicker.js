import ColorPicker from "./ColorPicker";

export default function AppColorPicker({color, setColor}) {
  return (
      <div>
        <ColorPicker color={color} setColor={setColor}/>
      </div>
  );
}