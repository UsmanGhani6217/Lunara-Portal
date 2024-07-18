// import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { Button, TabsWrapper } from "@/styles/CommonStyles";
import { NextPage } from "next";

const TabSection: NextPage = () => {
    const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date = {}, dateString = []) => {
        console.log(date, dateString);
    };
    return (
        <TabsWrapper>
            <div>
                <Button bgColor="white" color="#007bff">
                    Past incident
                </Button>
                <Button>Uptime</Button>
            </div>
            <div>
                {/* <DatePicker 
                    style={{ backgroundColor: '#000', color: '#fff' }} 
                    onChange={onChange} 
                    value={dayjs('12/05/2024')}
                    needConfirm 
                /> */}
            </div>
        </TabsWrapper>
    );
};

export default TabSection;
