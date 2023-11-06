import { PaymentInterface } from 'interfaces/payment';
import { UserInterface } from 'interfaces/user';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  user_id: string;
  tool_id: string;
  start_date: any;
  end_date: any;
  total_price: number;
  status: string;
  created_at?: any;
  updated_at?: any;
  payment?: PaymentInterface[];
  user?: UserInterface;
  tool?: ToolInterface;
  _count?: {
    payment?: number;
  };
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  tool_id?: string;
  status?: string;
}
