import BandsReducer from "../bands_reducer";
import { testBands } from "../../testUtil/band_helper";
import * as BandActions from "../../actions/band_actions";

describe("BandsReducer", () => {
    test("should initialize with an empty object as the default state", () => {
        expect(BandsReducer(undefined, {})).toEqual({});
    });

    // describe("handling the RECEIVE_BENCHES action", () => {
    //     let action;

    //     beforeEach(() => {
    //         action = {
    //             type: BenchActions.RECEIVE_BENCHES,
    //             benches: testBenches
    //         };
    //     });

    //     test("should replace the state with the action's benches", () => {
    //         const state = BenchesReducer(undefined, action);
    //         expect(state).toEqual(testBenches);
    //     });

    //     test("should not modify the old state", () => {
    //         let oldState = { 1: "oldState" };
    //         BenchesReducer(oldState, action);
    //         expect(oldState).toEqual({ 1: "oldState" });
    //     });
    // });
});

