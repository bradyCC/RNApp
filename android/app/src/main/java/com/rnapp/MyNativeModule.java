package com.rnapp;

import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

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
    // RN调用Android原生模块方法
    Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();

    // RN调用Android原生页面
    Intent intent = new Intent(mContext, MyActivity.class);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    mContext.startActivity(intent);
  }
}
