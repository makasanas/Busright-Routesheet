import Email from "../Models/Email";

export interface NewUserAccountRequest {
  fullName: string;
  preferredName: string;
  email: Email;
  password: string;
}



export interface AddressMutationRequest {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
}

export interface InvitationEmailRequest {
  email: Email;
}
