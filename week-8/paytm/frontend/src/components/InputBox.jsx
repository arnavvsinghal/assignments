function InputBox({label, placeholder}) {
  return ( 
    <div className="p-2">
      <div className="text-sm font-medium">
        {label}
      </div>
      <input type="text" placeholder = {placeholder} className="border rounded border-slate-200"/>
    </div>
   );
}

export default InputBox;