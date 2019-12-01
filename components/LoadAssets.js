import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

const usePromiseAll = (promises, cb) =>
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        regu1: require("../assets/Fonts/Courgette-Regular.ttf")
      });
      await Promise.all(promises);
      cb();
    })();
  });

const useLoadAssets = assets => {
  const [ready, setReady] = useState(false);

  usePromiseAll(
    assets.map(asset => Asset.loadAsync(asset)),
    () => setReady(true)
  );
  return ready;
};

export default LoadAssets = ({ assets, children }) => {
  const ready = useLoadAssets(assets);
  if (!ready) {
    return <AppLoading />;
  }
  return children;
};
