package com.rnapp;

import android.content.Context;
import android.widget.Toast;
import android.content.Intent;
import android.app.Activity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeModule extends ReactContextBaseJavaModule {
  private ReactApplicationContext mContext;

  public MyNativeModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mContext = reactContext;
  }

  @Override
  public String getName() {
    return "MyNativeModule";
  }

  @ReactMethod
  public void rnCallNative(String msg) {
    Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();

    Intent intent = new Intent(mContext, MyActivity.class);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    mContext.startActivity(intent);
  }
}
