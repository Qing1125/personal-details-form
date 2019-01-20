import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import DetailsForm from "@/components/DetailsForm.vue";

const localVue = createLocalVue();

const details = {
  name: {
    text: "Name",
    value: "Three Amigos",
    submit: true
  },
  entityType: {
    text: "Entity Type",
    value: "Business",
    submit: false
  },
  country: {
    text: "Country",
    value: "UNITED STATES OF AMERICAN",
    submit: true
  },
  address: {
    text: "Address",
    value: "100 California Drive, CA 90210",
    submit: false
  },
  postcode: {
    text: "Postcode",
    value: "90210",
    submit: true
  },
  email: {
    text: "Email",
    value: "dustybottoms@threeaamigos.com",
    submit: false
  }
};

localVue.use(Vuex);
localVue.use(Vuetify);

describe("DetailsForm.vue", () => {
  let actions;
  let store;
  let wrapper;

  beforeEach(() => {
    actions = {
      initDetails: jest.fn(),
      saveDetails: jest.fn()
    };
    store = new Vuex.Store({
      state: {
        details: details
      },
      actions
    });
    wrapper = shallowMount(DetailsForm, { store, localVue });
  });

  it('dispatches "initDetails" when mount data', () => {
    expect(actions.initDetails).toHaveBeenCalled();
  });

});
