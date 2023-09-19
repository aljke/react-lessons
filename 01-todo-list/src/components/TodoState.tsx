import { Chip } from "@mui/material";
import { makeStyles } from 'tss-react/mui';
import { ITodoStateProps, TodoStateEnum, TodoStateLabel } from "../types";

const useStyles = makeStyles()(() => ({
    completed: {
        backgroundColor: 'rgb(46, 125, 50)',
        color: 'white',
    },
    inprogress : {
        backgroundColor: 'rgb(237, 108, 2)',
        color: 'white',
    },
    created: {
        backgroundColor: '#CDDC39',
        color: 'white',
    },
}));

export const TodoState: React.FC<ITodoStateProps> = (props: ITodoStateProps) => {

    const { classes } = useStyles();

    const getStyle = (): string => {
        switch(props.state) {
            case TodoStateEnum.Completed:
                return classes.completed;
            
            case TodoStateEnum.Created:
                return classes.created;

            case TodoStateEnum.InProgress:
                return classes.inprogress;

            default:
                return classes.created;
        }
    };

    return (
        <Chip label={TodoStateLabel.get(props.state)} className={getStyle()}/>
    );
};