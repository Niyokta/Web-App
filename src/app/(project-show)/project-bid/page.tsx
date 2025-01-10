import { projectType, columns } from "./column"
import { DataTable } from "@/components/Projects/dataTable" 


export default async function DemoPage() {
  const data = await getData()
  
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

async function getData(): Promise<projectType[]> {
  // Fetch data from your API here.
  return [
    {
      titile: "Project Alpha",
      clientName: "Client A",
      client_country: "USA",
      max_budget: "10000",
      min_budget: "5000",
    },
    {
      titile: "Project Beta",
      clientName: "Client B",
      client_country: "Canada",
      max_budget: "15000",
      min_budget: "7000",
    },
    {
      titile: "Project Gamma",
      clientName: "Client C",
      client_country: "UK",
      max_budget: "20000",
      min_budget: "10000",
    },
    {
      titile: "Project Delta",
      clientName: "Client D",
      client_country: "Australia",
      max_budget: "25000",
      min_budget: "12000",
    },
    {
      titile: "Project Epsilon",
      clientName: "Client E",
      client_country: "Germany",
      max_budget: "30000",
      min_budget: "15000",
    },
    {
      titile: "Project Zeta",
      clientName: "Client F",
      client_country: "France",
      max_budget: "35000",
      min_budget: "17000",
    },
    {
      titile: "Project Eta",
      clientName: "Client G",
      client_country: "Italy",
      max_budget: "40000",
      min_budget: "20000",
    },
    {
      titile: "Project Theta",
      clientName: "Client H",
      client_country: "Spain",
      max_budget: "45000",
      min_budget: "22000",
    },
    {
      titile: "Project Iota",
      clientName: "Client I",
      client_country: "Netherlands",
      max_budget: "50000",
      min_budget: "25000",
    },
    {
      titile: "Project Kappa",
      clientName: "Client J",
      client_country: "Belgium",
      max_budget: "55000",
      min_budget: "27000",
    },
    {
      titile: "Project Lambda",
      clientName: "Client K",
      client_country: "Sweden",
      max_budget: "60000",
      min_budget: "30000",
    },
    {
      titile: "Project Mu",
      clientName: "Client L",
      client_country: "Norway",
      max_budget: "65000",
      min_budget: "32000",
    },
    {
      titile: "Project Nu",
      clientName: "Client M",
      client_country: "Denmark",
      max_budget: "70000",
      min_budget: "35000",
    },
    {
      titile: "Project Xi",
      clientName: "Client N",
      client_country: "Finland",
      max_budget: "75000",
      min_budget: "37000",
    },
    {
      titile: "Project Omicron",
      clientName: "Client O",
      client_country: "Switzerland",
      max_budget: "80000",
      min_budget: "40000",
    },
    {
      titile: "Project Pi",
      clientName: "Client P",
      client_country: "Austria",
      max_budget: "85000",
      min_budget: "42000",
    },
    {
      titile: "Project Rho",
      clientName: "Client Q",
      client_country: "Portugal",
      max_budget: "90000",
      min_budget: "45000",
    },
    {
      titile: "Project Sigma",
      clientName: "Client R",
      client_country: "Greece",
      max_budget: "95000",
      min_budget: "47000",
    },
    {
      titile: "Project Tau",
      clientName: "Client S",
      client_country: "Ireland",
      max_budget: "100000",
      min_budget: "50000",
    },
    {
      titile: "Project Upsilon",
      clientName: "Client T",
      client_country: "Poland",
      max_budget: "105000",
      min_budget: "52000",
    },
    {
      titile: "Project Phi",
      clientName: "Client U",
      client_country: "Czech Republic",
      max_budget: "110000",
      min_budget: "55000",
    },
    {
      titile: "Project Chi",
      clientName: "Client V",
      client_country: "Hungary",
      max_budget: "115000",
      min_budget: "57000",
    },
    {
      titile: "Project Psi",
      clientName: "Client W",
      client_country: "Romania",
      max_budget: "120000",
      min_budget: "60000",
    },
    {
      titile: "Project Omega",
      clientName: "Client X",
      client_country: "Bulgaria",
      max_budget: "125000",
      min_budget: "62000",
    },
    {
      titile: "Project Alpha-2",
      clientName: "Client Y",
      client_country: "Croatia",
      max_budget: "130000",
      min_budget: "65000",
    },
    {
      titile: "Project Beta-2",
      clientName: "Client Z",
      client_country: "Slovakia",
      max_budget: "135000",
      min_budget: "67000",
    },
    {
      titile: "Project Gamma-2",
      clientName: "Client AA",
      client_country: "Slovenia",
      max_budget: "140000",
      min_budget: "70000",
    },
    {
      titile: "Project Delta-2",
      clientName: "Client BB",
      client_country: "Estonia",
      max_budget: "145000",
      min_budget: "72000",
    },
    {
      titile: "Project Epsilon-2",
      clientName: "Client CC",
      client_country: "Latvia",
      max_budget: "150000",
      min_budget: "75000",
    },
    {
      titile: "Project Zeta-2",
      clientName: "Client DD",
      client_country: "Lithuania",
      max_budget: "155000",
      min_budget: "77000",
    },
    {
      titile: "Project Eta-2",
      clientName: "Client EE",
      client_country: "Luxembourg",
      max_budget: "160000",
      min_budget: "80000",
    },
    {
      titile: "Project Theta-2",
      clientName: "Client FF",
      client_country: "Malta",
      max_budget: "165000",
      min_budget: "82000",
    },
    {
      titile: "Project Iota-2",
      clientName: "Client GG",
      client_country: "Cyprus",
      max_budget: "170000",
      min_budget: "85000",
    },
    {
      titile: "Project Kappa-2",
      clientName: "Client HH",
      client_country: "Iceland",
      max_budget: "175000",
      min_budget: "87000",
    },
    {
      titile: "Project Lambda-2",
      clientName: "Client II",
      client_country: "Liechtenstein",
      max_budget: "180000",
      min_budget: "90000",
    },
    {
      titile: "Project Mu-2",
      clientName: "Client JJ",
      client_country: "Monaco",
      max_budget: "185000",
      min_budget: "92000",
    },
    {
      titile: "Project Nu-2",
      clientName: "Client KK",
      client_country: "San Marino",
      max_budget: "190000",
      min_budget: "95000",
    },
    {
      titile: "Project Xi-2",
      clientName: "Client LL",
      client_country: "Andorra",
      max_budget: "195000",
      min_budget: "97000",
    },
    {
      titile: "Project Omicron-2",
      clientName: "Client MM",
      client_country: "Vatican City",
      max_budget: "200000",
      min_budget: "100000",
    },
    // ...
  ]
}