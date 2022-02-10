
import { Table } from "baseui/table";
import { Tag } from 'baseui/tag';

const services = [
  {
    name: 'Nyan Cat',
    url: 'http://192.168.0.20'
  },
  {
    name: 'Wordle',
    url: 'http://192.168.0.20:5000'
  },
  {
    name: 'Sky Office',
    url: 'http://192.168.0.20:3000'
  },
]

const ServiceTable = () => {
  return (
    <Table
      columns={["Name", "URL", 'Status']}
      data={services.map(service => [
        service.name, 
        <a href={service.url} target='_blank' rel='noreferrer'>{service.url}</a>, 
        <Tag closeable={false} variant='outlined' kind='accent'>Calculating</Tag>
      ])}
    />
  );
}

export default ServiceTable;