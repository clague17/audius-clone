import react from 'react'

const SongSkeleton = () => {
  return (
    <div className="m-3 mx-auto w-full max-w-sm rounded-md border p-4 shadow">
      <div className="flex animate-pulse space-x-4">
        <div className="h-10 w-10 bg-slate-200"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-slate-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-slate-200"></div>
              <div className="col-span-1 h-2 rounded bg-slate-200"></div>
            </div>
            <div className="h-2 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongSkeleton
