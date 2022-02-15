import axios from "axios";
import { KIND, Tag } from "baseui/tag";
import { useEffect, useState } from "react";

interface ServiceTagProps {
  url: string;
}

const ServiceTag = ({ url }: ServiceTagProps) => {

  const [status, setStatus] = useState('Calculating');

  const convertStatusToKind = (status: string) => {
    let kind;
    switch (status) {
      case 'Calculating':
        kind = KIND.accent;
        break;
      case 'Healthy':
        kind = KIND.positive;
        break;
      case 'Unavailable':
        kind = KIND.negative;
        break;
      case 'Unreachable':
        kind = KIND.warning
        break;
    }

    return kind;
  }

  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          setStatus('Healthy');
        } else {
          setStatus('Unavailable');
        }
      } catch (e) {
        setStatus('Unreachable');
      }
    }

    getStatus();
  }, [url]);


  return (
    <Tag closeable={false} variant='outlined' kind={convertStatusToKind(status)}>{status}</Tag>
  )

}

export default ServiceTag;