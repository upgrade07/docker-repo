import React, { useState } from "react";
import { Resizable } from "re-resizable";
export default function Cmp3() {
   const [state, setState] = useState({ width: 1186, height: 600 });
   return (
      <Resizable
         style={{ marginLeft: 5,marginTop : 5, border: "1px solid black" }}
         size={{ width: state.width, height: state.height }}
         onResizeStop={(e, direction, ref, d) => {
            setState({
               width: state.width + d.width, height: state.height + d.height,});
            }}>
         Sample with size
      </Resizable>
   );
}
