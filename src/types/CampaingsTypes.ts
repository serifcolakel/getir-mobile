export interface Campaings {
  type: number;
  data: Data;
}

export interface Data {
  id: string;
  promoCode: string;
  promoType: number;
  accessibilityLabel: string;
  title: string;
  priority: number;
  description: string;
  promoURL: string;
  picURL: string;
  thumbnailURL: string;
  items: string;
  promoContentHTML: any;
  promoContentURL: string;
  promoBodyContentURL: string;
  promoContentSectionTitle: string;
  promoPageTitle: string;
  button: Button;
  shareButtons: string;
  promoBodyContentHTML: string;
}

export interface Button {
  text: any;
  action: Action;
}

export interface Action {
  type: number;
  ownerService: number;
  confirmationPopup: any;
  data: any;
}
