
import { Table } from "baseui/table";
import ServiceTag from "./ServiceTag";

const SERVICES = [
  {
    name: 'Nyan Cat',
    url: 'http://192.168.0.20',
  },
  {
    name: 'Wordle',
    url: 'http://192.168.0.20:5000',
  },
  {
    name: 'Sky Office',
    url: 'http://192.168.0.20:3000',
  },
]

const ServiceTable = () => {
  return (
    <Table
      columns={["Name", "URL", 'Status']}
      data={SERVICES.map(service => [
        service.name, 
        <a href={service.url} target='_blank' rel='noreferrer'>{service.url}</a>, 
        <ServiceTag url={service.url} />
      ])}
    />
  );
}

export default ServiceTable;