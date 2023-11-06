import { ToolInterface } from 'interfaces/tool';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  location: string;
  company_id: string;
  opening_hours?: string;
  closing_hours?: string;
  created_at?: any;
  updated_at?: any;
  tool?: ToolInterface[];
  company?: CompanyInterface;
  _count?: {
    tool?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  company_id?: string;
  opening_hours?: string;
  closing_hours?: string;
}
