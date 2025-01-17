import { getPublicKey, isConnected, signTransaction, } from '@stellar/freighter-api';
export const isFreighterInstalled = async () => isConnected();
export const freighterGetPublicKey = async () => {
    if (!isConnected()) {
        throw new Error(`Freighter is not connected`);
    }
    return getPublicKey();
};
export const freighterSignTransaction = async (params) => {
    if (!isConnected()) {
        throw new Error(`Freighter is not connected`);
    }
    return signTransaction(params.xdr, {
        accountToSign: params.accountToSign,
        networkPassphrase: params.networkPassphrase,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlaWdodGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9mcmVpZ2h0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixXQUFXLEVBQ1gsZUFBZSxHQUNoQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFOUQsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsS0FBSyxJQUFxQixFQUFFO0lBQy9ELElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7S0FDL0M7SUFFRCxPQUFPLFlBQVksRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLEtBQUssRUFDM0MsTUFBNEIsRUFDWCxFQUFFO0lBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7S0FDL0M7SUFFRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ2pDLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYTtRQUNuQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCO0tBQzVDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldFB1YmxpY0tleSxcbiAgaXNDb25uZWN0ZWQsXG4gIHNpZ25UcmFuc2FjdGlvbixcbn0gZnJvbSAnQHN0ZWxsYXIvZnJlaWdodGVyLWFwaSc7XG5cbmV4cG9ydCBjb25zdCBpc0ZyZWlnaHRlckluc3RhbGxlZCA9IGFzeW5jICgpID0+IGlzQ29ubmVjdGVkKCk7XG5cbmV4cG9ydCBjb25zdCBmcmVpZ2h0ZXJHZXRQdWJsaWNLZXkgPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgaWYgKCFpc0Nvbm5lY3RlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGcmVpZ2h0ZXIgaXMgbm90IGNvbm5lY3RlZGApO1xuICB9XG5cbiAgcmV0dXJuIGdldFB1YmxpY0tleSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyZWlnaHRlclNpZ25UcmFuc2FjdGlvbiA9IGFzeW5jIChcbiAgcGFyYW1zOiBJRnJlaWdodGVyU2lnblBhcmFtc1xuKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgaWYgKCFpc0Nvbm5lY3RlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGcmVpZ2h0ZXIgaXMgbm90IGNvbm5lY3RlZGApO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25UcmFuc2FjdGlvbihwYXJhbXMueGRyLCB7XG4gICAgYWNjb3VudFRvU2lnbjogcGFyYW1zLmFjY291bnRUb1NpZ24sXG4gICAgbmV0d29ya1Bhc3NwaHJhc2U6IHBhcmFtcy5uZXR3b3JrUGFzc3BocmFzZSxcbiAgfSk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElGcmVpZ2h0ZXJTaWduUGFyYW1zIHtcbiAgeGRyOiBzdHJpbmc7XG4gIGFjY291bnRUb1NpZ24/OiBzdHJpbmc7XG4gIG5ldHdvcmtQYXNzcGhyYXNlOiBzdHJpbmc7XG59XG4iXX0=