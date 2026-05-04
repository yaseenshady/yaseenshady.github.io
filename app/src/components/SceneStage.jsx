import { Component, Suspense, lazy, useEffect, useState } from "react";

const SceneCanvas = lazy(() => import("./SceneCanvas"));

function SceneFallback() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(121,228,255,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(155,140,255,0.18),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_20%)]" />
      <div className="absolute inset-x-0 top-[12%] h-72 bg-cyan-300/10 blur-[120px]" />
      <div className="absolute bottom-[10%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-400/10 blur-[140px]" />
    </div>
  );
}

function detectWebglSupport() {
  if (typeof document === "undefined") return false;

  const canvas = document.createElement("canvas");

  return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
}

class SceneBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("3D scene failed to render", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default function SceneStage({ progress, reduceMotion }) {
  const [supportsWebgl, setSupportsWebgl] = useState(true);

  useEffect(() => {
    setSupportsWebgl(detectWebglSupport());
  }, []);

  if (reduceMotion || !supportsWebgl) {
    return <SceneFallback />;
  }

  return (
    <SceneBoundary fallback={<SceneFallback />}>
      <Suspense fallback={<SceneFallback />}>
        <SceneCanvas progress={progress} />
      </Suspense>
    </SceneBoundary>
  );
}
