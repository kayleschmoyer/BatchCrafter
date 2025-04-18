interface Props {
    script: string;
  }
  
  export default function StepPreview({ script }: Props) {
    return (
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Live Script Preview</h2>
        <pre className="bg-black text-green-400 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap border border-yellow-500">
          {script}
        </pre>
      </div>
    );
  }
  