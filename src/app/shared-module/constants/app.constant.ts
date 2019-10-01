export class AppConstants {


    // Error Messages
    public static readonly ERR_MANDATORY: string = 'This field is mandatory';
    public static readonly ERR_EMAIL_INVALID: string = 'Enter a valid email address';
    public static readonly ERR_MAXLENGTH: string = 'This field exceeds the maximum permissible length of 10 digitd';
    public static readonly ERR_MINLENGTH: string = 'This field should have minimum length of 10 digits';
    public static readonly ERR_NUMERIC: string = 'This field needs to be a numeric';


    // Configuration

    public static readonly KEY_DELETE = 'DELETE';
    public static readonly KEY_SAVE = 'Save';
    public static readonly KEY_ADD_NEW = 'Add New Contact';
    public static readonly KEY_SUBMIT = 'Submit';
    public static readonly KEY_UPDATE = 'Update';
    public static readonly KEY_CANCEL = 'Cancel';
    public static readonly KEY_RESET = 'Reset';

// general load and error message


    public static readonly LOAD_GENERIC_MSG = 'Please wait while the data is bieng fetched..';
    public static readonly GEN_SAVE_MSG_SUCCESS = 'Data Saved Successfully !';
    public static readonly GEN_NO_RECORDS_UPDATED = 'No Records were modified. Please check whether the file is empty/action column is not set.';
    public static readonly GEN_SAVE_MSG_ERR = 'Error encountered while saving data';
    public static readonly GEN_ERR_MSG = 'Error encountered while performing this operation';

}
