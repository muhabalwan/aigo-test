import styled from 'styled-components';

export const StyledOlMaps = styled.div`
  width: 80%;
  .ol-map {
      min-width: 600px;
      min-height: 500px;
      margin: 50px;
      height: 500px;
      width: 100%;
    }
    .ol-control {
      background-color: rgba(255,255,255,0.4);
      border-radius: 4px;
      padding: 2px;
    }
    .ol-full-screen {
      top: .5em;
      right: .5em;
    }
    canvas {
      width: 100%;
    }
  
  `;

