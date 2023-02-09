navigator.requestMIDIAccess().then(accesoMIDI => {
    accesoMIDI.onstatechange = e => {
      document.querySelector("#nameMIDI").innerText =
        e.port.state === "connected"
          ? "Modelo del controlador MIDI: " + e.port.name
          : "No hay controlador MIDI conectado";
    };

    document.querySelector("#nameMIDI").innerText =
      accesoMIDI.inputs.size > 0
        ? "Modelo del controlador MIDI: " +
          accesoMIDI.inputs.values().next().value.name
        : "No hay controlador MIDI conectado";
  });