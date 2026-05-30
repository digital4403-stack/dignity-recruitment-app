import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const [riders, setRiders] = useState([])

  useEffect(() => {
    fetchRiders()
  }, [])

  async function fetchRiders() {
    const { data } = await supabase.from("riders").select("*")
    setRiders(data || [])
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>🚀 Dignity Recruitment Dashboard</h1>

      <h2>Total Riders: {riders.length}</h2>

      <ul>
        {riders.map((rider) => (
          <li key={rider.id}>
            {rider.name} - {rider.phone}
          </li>
        ))}
      </ul>
    </div>
  )
}
