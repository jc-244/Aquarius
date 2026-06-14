%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgdGlueSBzZWN0aW9uIGlzIHN5bWJvbGljIGFuZCBoYXMgbm8gYXZhaWxhYmxlIHRleHRib29rIGZpZ3VyZSBvciB3ZWIgcmVmZXJlbmNlIGFzc2V0LiBUaGUgb25seSB1c2VmdWwgdmlzdWFsIGlzIGEgY3VzdG9tIGV4YW0tcGF0dGVybiB2aXN1YWwgc2hvd2luZyB0aGF0IGEgY29uc3RhbnQgZmFjdG9yIGNyZWF0ZXMgYSBmbGF0IEJvZGUgbWFnbml0dWRlIG9mZnNldCBhbmQgYSBjb25zdGFudCBwaGFzZSBsZXZlbCwgbm90IGEgZnJlcXVlbmN5LWRlcGVuZGVudCBzbG9wZS4iLCJjcmFtIjoiVXNlIHRoZSB2aXN1YWwgdG8gaWRlbnRpZnkgdGhlIGV4YW0gdHJpZ2dlcjogYSBwdXJlIGNvbnN0YW50IG1lYW5zIGZsYXQgbWFnbml0dWRlIGFuZCBmbGF0IHBoYXNlLiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29ubmVjdCB0aGUgZm9ybXVsYXMgdG8gdGhlIHNoYXBlOiBob3Jpem9udGFsIGRCIGxpbmUgYW5kIGhvcml6b250YWwgcGhhc2UgbGluZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHZpc3VhbCB0byBleHBvc2UgdGhlIHRyYXA6IGEgbmVnYXRpdmUgcmVhbCBjb25zdGFudCBjaGFuZ2VzIHBoYXNlIGJ5IHBpLCB3aGlsZSBtYWduaXR1ZGUgdXNlcyBhYnNvbHV0ZSB2YWx1ZS4ifQ==" style="display:none;"></div>%%KC_END%%
# Constant Factor in Bode Plots

> **Section Objective:** Learn how a constant multiplier contributes to a Bode log-amplitude plot and phase plot.

---

### CONCEPTS IN THIS SECTION

- Constant factor
- Log-amplitude offset
- Constant phase contribution
- Sign trap

## 1. Constant Factor: The Part That Does Not Depend on Frequency

In a frequency-response product, one factor is often a plain constant — the term \(C = K a_1 a_2/(b_1 b_3)\). Unlike poles or zeros, \(C\) contains no \(\omega\). Because it never changes as frequency varies, it cannot create a slope, a corner frequency, or any curve on the Bode plot.

What it does instead is simple: it shifts the log-amplitude plot up or down by a fixed number of decibels, and it contributes exactly one fixed phase value — nothing more.

For example, if \(C = 10\), the magnitude contribution is a constant positive offset of \(20\log_{10}10 = 20\) dB across all frequencies.

## 2. Phase contribution: fixed angle, not a changing curve

\(C\) is the constant multiplier extracted from the full frequency-response product. Every symbol — \(K\), \(a_1\), \(a_2\), \(b_1\), \(b_3\) — is a fixed real number, so this term has no \(\omega\)-dependence whatsoever.

**Exam trigger:** Identify this factor whenever a term in the transfer function is a plain constant rather than \(j\omega\), \(1 + j\omega/a\), or \(a + j\omega\).

**Common misuse:** Treating the constant as if it created a Bode slope. A constant has no \(\omega\), so it produces no slope — only a flat offset.

$$C = \frac{K a_1 a_2}{b_1 b_3}$$

$$20\log_{10}|C|$$
*This is the constant factor's log-amplitude contribution, measured in decibels. The absolute value \(|C|\) is required because amplitude is always nonnegative — the logarithm of a negative number is not real.

**When to use it:** Whenever a multiplicative constant appears in a frequency response before you sketch the Bode magnitude plot, compute \(20\log_{10}|C|\) and add it as a flat vertical offset.

**Exam trigger:** A constant multiplying the whole transfer function shifts the entire magnitude plot vertically by this fixed amount.

**Common misuse:** Writing \(20\log_{10}C\) without the absolute value when \(C < 0\). This produces an undefined (non-real) result.*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="trap_exposure" data-visual-use-b64="eyJjcmFtIjoiQXNzb2NpYXRlICdjb25zdGFudCBmYWN0b3InIGluc3RhbnRseSB3aXRoIGEgaG9yaXpvbnRhbCBkQiBsaW5lLiIsInN0YW5kYXJkIjoiQ29ubmVjdCB0aGUgZm9ybXVsYSAyMCBsb2cxMCB8Q3wgdG8gYSBmbGF0IHZlcnRpY2FsIG9mZnNldCBvbiB0aGUgbWFnbml0dWRlIHBsb3QuIiwidG9wX3Njb3JlIjoiVGhlIGNyb3NzZWQtb3V0IHNsb3BlZCBsaW5lIGlzIHRoZSBleGFtIHRyYXAg4oCUIGEgY29uc3RhbnQgaGFzIG5vIG9tZWdhLCBzbyBpdCBjYW5ub3Qgc2xvcGUuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 A constant factor produces a flat horizontal dB line — never a slope. The crossed-out sloped line shows the most common exam mistake.*
![Illustration](/generated/gptimage2-1781418265281-3910.png)

## 2. Phase Contribution: Fixed Angle, Not a Changing Curve

Just as the magnitude of a constant does not change with \(\omega\), neither does its phase. The phase contribution of a constant is a single fixed number — it does not sweep or curve.

**Positive real constant:** Phase contribution is \(0\). A positive real number points along the positive real axis, so it adds no phase shift.

**Negative real constant:** Phase contribution is \(\pi\) radians. A negative real number points in the opposite direction on the real axis, which corresponds to a phase of \(\pi\).

**Complex constant:** The phase contribution equals the argument of the complex number — still a fixed value, independent of \(\omega\).

#### Example

If \(C = -5\), the magnitude contribution uses \(|C| = 5\), giving \(20\log_{10}5 \approx 14\) dB. But the phase contribution is \(\pi\), not \(0\) — the negative sign matters for phase even though it disappears in the absolute value.

$$\angle C = 0 \quad \text{if } C > 0$$
*A positive real constant lies on the positive real axis of the complex plane. Its angle from the positive real axis is exactly zero, so it contributes no phase shift to the overall frequency response.

**Exam trigger:** After simplifying the constant factor, if the result is a positive real number, write \(\angle C = 0\) and move on — no phase offset is added.

**Common misuse:** Adding a nonzero phase contribution just because a constant factor appears. A positive constant contributes zero phase.*

$$\angle C = \pi \quad \text{if } C < 0$$
*A negative real constant lies on the negative real axis of the complex plane. Its angle from the positive real axis is \(\pi\) radians (equivalently, \(180^\circ\)), so it contributes a fixed phase offset of \(\pi\) to the frequency response.

Note: some courses express this equivalently as \(-\pi\), since \(\pi\) and \(-\pi\) represent the same direction. This section uses \(\pi\).

**Common misuse:** Forgetting that the sign of \(C\) affects phase even though magnitude uses \(|C|\). The absolute value removes the sign for magnitude only — the sign still determines the phase.*

---
**📌 Key Takeaways**
- The constant factor \(C = K a_1 a_2/(b_1 b_3)\) has no \(\omega\)-dependence, so it creates no Bode slope — only a flat offset.
- Log-amplitude contribution: \(20\log_{10}|C|\) dB — a fixed vertical shift applied uniformly across all frequencies.
- Phase contribution: \(\angle C = 0\) if \(C > 0\); \(\angle C = \pi\) if \(C < 0\) — the sign matters for phase even though magnitude uses absolute value.
- Complex constants contribute their fixed argument as the phase offset — still independent of \(\omega\).

*Next, we will see how nonconstant factors such as poles or zeros at the origin change the Bode plot shape.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NSwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo0LCJtYXgiOjZ9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImNvbnN0YW50X2ZhY3Rvcl9yZWNvZ25pdGlvbiIsImxhYmVsIjoiUmVjb2duaXppbmcgYSBjb25zdGFudCBmYWN0b3IiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoaXMgc2VjdGlvbiwgd2h5IGRvZXMgdGhlIGZhY3RvciBcXChDID0gSyBhXzEgYV8yLyhiXzEgYl8zKVxcKSBub3QgY3JlYXRlIGEgQm9kZS1wbG90IHNsb3BlPyIsIm9wdGlvbnMiOlsiQS4gQmVjYXVzZSBpdCBjb250YWlucyBubyBcXChcXG9tZWdhXFwpIiwiQi4gQmVjYXVzZSBldmVyeSBjb25zdGFudCBoYXMgemVybyBtYWduaXR1ZGUiLCJDLiBCZWNhdXNlIGNvbnN0YW50cyBhcmUgaWdub3JlZCBpbiBCb2RlIHBsb3RzIiwiRC4gQmVjYXVzZSBvbmx5IGRlbm9taW5hdG9yIHRlcm1zIGFmZmVjdCBCb2RlIHBsb3RzIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQSBzbG9wZSBjb21lcyBmcm9tIGZyZXF1ZW5jeS1kZXBlbmRlbnQgZmFjdG9ycy4gQSBwdXJlIGNvbnN0YW50IGhhcyBubyBcXChcXG9tZWdhXFwpLCBzbyBpdHMgY29udHJpYnV0aW9uIGlzIGZsYXQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiQSBjb25zdGFudCBjYW4gaGF2ZSBub256ZXJvIG1hZ25pdHVkZTsgaXQgY29udHJpYnV0ZXMgYSBkQiBvZmZzZXQuIiwiQyI6IkNvbnN0YW50cyBhcmUgbm90IGlnbm9yZWQ7IHRoZXkgc2hpZnQgbWFnbml0dWRlIGFuZCBtYXkgYWZmZWN0IHBoYXNlLiIsIkQiOiJOdW1lcmF0b3IgY29uc3RhbnRzIGFuZCBkZW5vbWluYXRvciBjb25zdGFudHMgYm90aCBhZmZlY3QgdGhlIHRvdGFsIGNvbnN0YW50IGZhY3Rvci4ifSwiaGludCI6Ikxvb2sgZm9yIHdoZXRoZXIgdGhlIHRlcm0gY2hhbmdlcyB3aGVuIFxcKFxcb21lZ2FcXCkgY2hhbmdlcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgQm9kZSBza2V0Y2ggc2hvd3MgdGhlIGNvbnRyaWJ1dGlvbiBvZiBhIHB1cmUgY29uc3RhbnQgYXMgYSBzbG9wZWQgbGluZSB2ZXJzdXMgXFwoXFxvbWVnYVxcKS4gV2hhdCBpcyB3cm9uZz8iLCJvcHRpb25zIjpbIkEuIEEgcHVyZSBjb25zdGFudCBzaG91bGQgcHJvZHVjZSBhIGhvcml6b250YWwgbWFnbml0dWRlIGNvbnRyaWJ1dGlvbiIsIkIuIEEgcHVyZSBjb25zdGFudCBzaG91bGQgcHJvZHVjZSBubyBtYWduaXR1ZGUgY29udHJpYnV0aW9uIGF0IGFsbCIsIkMuIEEgcHVyZSBjb25zdGFudCBzaG91bGQgYWx3YXlzIHByb2R1Y2UgYSBcXCgtMjBcXCkgZEIvZGVjYWRlIHNsb3BlIiwiRC4gQSBwdXJlIGNvbnN0YW50IG9ubHkgYWZmZWN0cyBwaGFzZSwgbmV2ZXIgbWFnbml0dWRlIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIG1hZ25pdHVkZSBjb250cmlidXRpb24gb2YgYSBjb25zdGFudCBpcyBcXCgyMFxcbG9nX3sxMH18Q3xcXCksIHdoaWNoIGlzIGluZGVwZW5kZW50IG9mIFxcKFxcb21lZ2FcXCksIHNvIGl0IGlzIGhvcml6b250YWwuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlIGNvbnRyaWJ1dGlvbiBtYXkgYmUgemVybyBvbmx5IGlmIFxcKHxDfCA9IDFcXCksIG5vdCBpbiBnZW5lcmFsLiIsIkMiOiJBIFxcKC0yMFxcKSBkQi9kZWNhZGUgc2xvcGUgaXMgYXNzb2NpYXRlZCB3aXRoIGNlcnRhaW4gZnJlcXVlbmN5LWRlcGVuZGVudCBwb2xlIGZhY3RvcnMsIG5vdCBhIHB1cmUgY29uc3RhbnQuIiwiRCI6IkEgY29uc3RhbnQgYWZmZWN0cyBtYWduaXR1ZGUgdGhyb3VnaCBcXCgyMFxcbG9nX3sxMH18Q3xcXCkuIn0sImhpbnQiOiJObyBcXChcXG9tZWdhXFwpIG1lYW5zIG5vIGNoYW5naW5nIHZhbHVlLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ3cm9uZ192c19yaWdodF92aXN1YWxfY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImxvZ19hbXBsaXR1ZGVfb2Zmc2V0IiwibGFiZWwiOiJMb2ctYW1wbGl0dWRlIGNvbnRyaWJ1dGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUgbG9nLWFtcGxpdHVkZSBjb250cmlidXRpb24gb2YgYSBjb25zdGFudCBmYWN0b3IgXFwoQ1xcKT8iLCJvcHRpb25zIjpbIkEuIFxcKDIwXFxsb2dfezEwfXxDfFxcKSIsIkIuIFxcKDIwXFxsb2dfezEwfUNcXCkgZm9yIGFsbCByZWFsIFxcKENcXCkiLCJDLiBcXChcXGxvZ197MTB9fEN8LzIwXFwpIiwiRC4gXFwoMjB8XFxsb2dfezEwfUN8XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQm9kZSBtYWduaXR1ZGUgaW4gZGVjaWJlbHMgdXNlcyBcXCgyMFxcbG9nX3sxMH1cXCkgb2YgdGhlIG1hZ25pdHVkZSwgc28gdGhlIGFic29sdXRlIHZhbHVlIGlzIHJlcXVpcmVkLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgZmFpbHMgZm9yIG5lZ2F0aXZlIGNvbnN0YW50cyBiZWNhdXNlIFxcKFxcbG9nX3sxMH1DXFwpIGlzIG5vdCByZWFsIHdoZW4gXFwoQyA8IDBcXCkuIiwiQyI6IlRoZSBmYWN0b3IgaXMgbXVsdGlwbGllZCBieSAyMCwgbm90IGRpdmlkZWQgYnkgMjAuIiwiRCI6IlRoZSBhYnNvbHV0ZSB2YWx1ZSBhcHBsaWVzIHRvIHRoZSBjb25zdGFudCBiZWZvcmUgdGhlIGxvZ2FyaXRobSwgbm90IHRvIHRoZSBsb2dhcml0aG0gYWZ0ZXJ3YXJkLiJ9LCJoaW50IjoiQW1wbGl0dWRlIHVzZXMgbWFnbml0dWRlIGZpcnN0LCB0aGVuIGxvZ2FyaXRobS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJwaGFzZV9mcm9tX2NvbnN0YW50X3NpZ24iLCJsYWJlbCI6IlBoYXNlIGNvbnRyaWJ1dGlvbiBmcm9tIHRoZSBzaWduIG9mIGEgcmVhbCBjb25zdGFudCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB0aGUgY29uc3RhbnQgZmFjdG9yIGlzIFxcKEMgPSAtNVxcKSwgd2hhdCBwaGFzZSBjb250cmlidXRpb24gZG9lcyB0aGlzIHNlY3Rpb24gYXNzaWduPyIsIm9wdGlvbnMiOlsiQS4gXFwoMFxcKSIsIkIuIFxcKFxccGlcXCkiLCJDLiBcXCg1XFxwaVxcKSIsIkQuIFxcKDIwXFxsb2dfezEwfTVcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJBIG5lZ2F0aXZlIHJlYWwgY29uc3RhbnQgcG9pbnRzIGFsb25nIHRoZSBuZWdhdGl2ZSByZWFsIGF4aXMsIHNvIGl0cyBwaGFzZSBjb250cmlidXRpb24gaXMgXFwoXFxwaVxcKSByYWRpYW5zLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Ilplcm8gcGhhc2UgaXMgZm9yIGEgcG9zaXRpdmUgcmVhbCBjb25zdGFudC4iLCJDIjoiVGhlIG1hZ25pdHVkZSA1IGRvZXMgbm90IG11bHRpcGx5IHRoZSBwaGFzZSBieSBcXChcXHBpXFwpLiIsIkQiOiJUaGF0IGlzIHRoZSBtYWduaXR1ZGUgY29udHJpYnV0aW9uIGluIGRCLCBub3QgdGhlIHBoYXNlIGNvbnRyaWJ1dGlvbi4ifSwiaGludCI6IlNlcGFyYXRlIG1hZ25pdHVkZSBmcm9tIGFuZ2xlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgc2F5czogJ1NpbmNlIFxcKHwtNXwgPSA1XFwpLCB0aGUgcGhhc2Ugb2YgXFwoLTVcXCkgbXVzdCBiZSB0aGUgc2FtZSBhcyB0aGUgcGhhc2Ugb2YgXFwoKzVcXCkuJyBFeHBsYWluIHdoeSB0aGlzIGlzIHdyb25nLiIsImlkZWFsX2Fuc3dlciI6Ik1hZ25pdHVkZSBhbmQgcGhhc2UgYXJlIGRpZmZlcmVudCBxdWFudGl0aWVzLiBCb3RoIFxcKC01XFwpIGFuZCBcXCgrNVxcKSBoYXZlIG1hZ25pdHVkZSA1LCBidXQgXFwoKzVcXCkgbGllcyBvbiB0aGUgcG9zaXRpdmUgcmVhbCBheGlzIHdpdGggcGhhc2UgXFwoMFxcKSwgd2hpbGUgXFwoLTVcXCkgbGllcyBvbiB0aGUgbmVnYXRpdmUgcmVhbCBheGlzIHdpdGggcGhhc2UgXFwoXFxwaVxcKS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgbWFnbml0dWRlIGFuZCBwaGFzZSBhcmUgZGlmZmVyZW50IHF1YW50aXRpZXMiLCJNdXN0IGlkZW50aWZ5IHRoZSBtYWduaXR1ZGUgb2YgYm90aCBjb25zdGFudHMgYXMgNSIsIk11c3Qgc3RhdGUgXFwoXFxhbmdsZSgrNSkgPSAwXFwpIGFuZCBcXChcXGFuZ2xlKC01KSA9IFxccGlcXCksIG9yIGVxdWl2YWxlbnQgd29yZGluZyJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHRoZSBrZXkgdHJhcDogYWJzb2x1dGUgdmFsdWUgcmVtb3ZlcyB0aGUgc2lnbiBmb3IgbWFnbml0dWRlLCBidXQgdGhlIHNpZ24gc3RpbGwgbWF0dGVycyBmb3IgcGhhc2UuIiwiaGludCI6IkFzayB3aGVyZSBlYWNoIG51bWJlciBsaWVzIG9uIHRoZSByZWFsIGF4aXMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19XX0=" style="display:none;"></div>%%KC_END%%
